"use client"
import React, { ChangeEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Poppins as FontSans } from "next/font/google"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, FileUp } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"

})

export default function Home() {
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter()

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };
  
  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
    setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
  };
  
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
  };

  const FormSchema = z.object({
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main>
    <nav className="bg-customColor_black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open Main Menu</span>

                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Menu open: "block", Menu closed: "hidden"*/}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src="/logo_label.png" alt="EventWise">
                    </img>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="/" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>

                        <div className="relative">
                          <button
                            type="button"
                            className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={toggleEventsDropdown}
                          >
                            Events
                          </button>

                          {isEventsDropdownOpen && (
                            <div
                              className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="user-menu-button"
                              tabIndex={-1}
                            >
                              <a href="/event1" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Calendar
                              </a>
                              <a href="/event2" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Events
                              </a>
                              <a href="/event3" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                                Joined
                              </a>
                            </div>
                          )}
                        </div>

                        <a href="/about" className="bg-customColor_yellow text-customColor_black rounded-md px-3 py-2 text-base font-medium" aria-current="page">About</a>
                        <a href="/services" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
                    </div>
                </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
              <button onClick={() => {router.push('/notification')}} type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
              <button type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View budget</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </button>
            </div>

            {/* Profile dropdown*/}
            <div className="relative ml-2" onClick={toggleProfileDropdown}>
                <div>
                    <button type="button" className="relative flex rounded-full bg-customColor_yellow text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded={isProfileDropdownOpen} aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open User Menu</span>
                        <img className="h-8 w-8 rounded-full" src="/icon_wb.png" alt=""></img>
                    </button>
                </div>

                {isProfileDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Portfolio
                    </a>
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Log Out
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Mobile Menu, show/hide based on menu open state.*/}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Events</a>
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</a>
          </div>
        </div>
      </nav>
    <div className={cn(fontSans.variable, "font-sans mx-[70px] my-[30px]")}>
      <h1 className="grid grid-cols-7 gap-x-2 text-[45px]" >
        <p>Book an </p><p className="text-amber-400">Event</p>
      </h1>
      <div className="grid grid-cols-2 gap-x-2">
        <div>
          <p className='mx-[10px] my-[5px]'>Event name</p>
          <Input className='w-[600px]' type="text" placeholder="Enter event name" />
          <p className='mx-[10px] my-[5px] mt-5'>Event Type</p>
          <Input className='w-[600px]' type="text" placeholder="Enter event type" />
          <p className='mx-[10px] my-[5px] mt-5'>Event Date</p>
          
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal bg-white text-black w-[600px]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
                
              )}
            />
          </form>
          </Form>
          <p className='mx-[10px] my-[5px] mt-5'>Event Time</p>
          <Select>
            <SelectTrigger className="w-[180px] w-[600px]">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9:00AM">9:00AM</SelectItem>
              <SelectItem value="10:00AM">10:00AM</SelectItem>
              <SelectItem value="11:00AM">11:00AM</SelectItem>
              <SelectItem value="12:00PM">12:00PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <div>
          <button className="border border-black bg-white text-black px-[45.2%] py-[20.9%] rounded-sm mt-1" onClick={handleUploadClick}>
            {file ? `${file.name}` : <FileUp size={60} />}
          </button>

          {/* 👇 Notice the `display: hidden` on the input */}
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          </div>
        </div>
      </div>
      <p className='mx-[10px] my-[5px] mt-5'>Venue Location</p>
      <Input className='w-[100%]' type="text" placeholder="Enter Venue Location" />
      <p className='mx-[10px] my-[5px] mt-5'>Description</p>
      <Textarea className='h-[200px]' placeholder="Write your description..." />
      <p className='mx-[10px] my-[5px] mt-5'>Invitation Message</p>
      <Textarea className='h-[200px]' placeholder="Write your message..." />
      <p className='mx-[10px] my-[5px] mt-5'>People To Invite (e.g. random@gmail.com, random2@gmail.com)</p>
      <Textarea className='h-[200px]' placeholder="Write the email..." />
      <Button className={cn(fontSans.variable , 'py-[27px] mt-[50px] w-[450px] ml-[450px] text-[25px] text-bold hover:bg-violet-700')}>
        Submit</Button>
        <div>
        <img className="h-8 w-8 rounded-full" src="/image.png" alt=""></img>
        </div>
         {/* Footer Top */}
      <footer className="bg-customColor_black text-customColor_white py-8">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 md:w-1/2">
                        <a href="#" className="flex items-center">
                            <img src="/images/logo_label.png" className="h-8 me-3" alt="EventWise Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                        <h3 className="text-white text-base mb-4 mt-3">Our Mission</h3>
                        <p className="text-gray-500">
                        Our mission is to deliver the best events and services to our customers. We aim to exceed expectations and continuously innovate to meet the needs of our diverse clientele.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-customColor_white uppercase dark:text-white">EVENTWISE</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Grants</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">EventWise Cop</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Media Kit</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Disclaimer</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-customColor_white uppercase dark:text-white">GET CONNECTED</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Ecosystem</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Newsletter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-20">
                            <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white">
                                EN
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                <span className="sr-only">EN</span>
                            </a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Line */}
                <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                {/* Footer Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">EventWise Foundation™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                        </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                        </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
            </footer>
    </div>
    </main>
    
  );
}
