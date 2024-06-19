"use client"
import React, { ChangeEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Poppins as FontSans } from "next/font/google"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { X } from "lucide-react"
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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
                        <a href="#" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>

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
              <button onClick={() => {router.replace('/notification')}} type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
          <a href="" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Events</a>
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</a>
          </div>
        </div>
      </nav>
      
    <div className='flex-1 w-full h-full justify-center pb-[3%] bg-yellow-500 '>  
    <X className='ml-3 pt-3' color='red' size={40}/> 
      <div className='flex-1 w-full h-full grid py-[3%] justify-center bg-yellow-500 content-center items-center'>
        <div className='w-full h-full text-center py-[1%] text-[30px] text-amber-900 font-bold'>
          <h1 className='font-bold text-yellow-900 text-5xl mb-5'>
          Notifications</h1>
        </div>
        <div className="w-full h-full " >
          <Button className="mx-2 bg-white w-[150px] font-bold">Participants</Button>
          <Button className="mx-2 bg-white w-[150px] font-bold">Suppliers</Button>
          <Button className="mx-2 bg-white w-[150px] font-bold">Groups</Button>
          <Button className="mx-2 bg-white w-[150px] font-bold">Add</Button>
        </div>
        
      </div>
      <div className='w-full bg-white text-black'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell>Malik's Wedding</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className='rounded-[90%]'
                  src="/icon_wb.png"
                  alt="profile"
                  height={50}
                  width={50}
                />
              </TableCell>
              <TableCell><p >Malik's Wedding</p><div className='grid grid-cols-2 w-[35%] gap-x-0'></div></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                <div className='bg-yellow-500 rounded-[80%] w-[50px] h-[50px] text-center grid items-center text-[15px]'>
                  1
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    </main>
    
  );
}
