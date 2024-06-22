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

import EWHeader from '../../../components/EWHeader';
import EWFooter from '../../../components/EWFooter';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"

})

const Notification: React.FC = () => {
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

      {/* Notification */}
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

      <EWFooter/>
    </div>
  );
}

export default Notification;