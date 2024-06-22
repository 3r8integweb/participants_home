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

import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"

})

const Booking: React.FC = () => {
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
    <div>
      <EWHeader/>

      {/* Book an Event */}
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
      </div>

      <EWFooter/>
    </div>
  );
}

export default Booking;
