"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 digits." })
    .max(11, { message: "Phone number cannot exceed 11 digits." })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(1, { message: "Message is required." }),
});

function Page() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (value) => {
    // Handle form submission logic here
    console.log("Form submitted:", value);
    // Reset form values
    form.reset();
  };

  return (
    <>
      <Navbar />

      {/* About Us Hero Banner */}
      <div className="relative h-[725px] w-full">
        <Image
          src="/assets/Contact/Banner.png"
          layout="fill"
          alt="Banner"
          priority={true}
          className="-z-10"
        />

        <div className="absolute flex flex-col justify-center items-center bottom-12 w-full z-10">
          <h1 className="text-center font-poppins font-bold md:text-6xl text-4xl px-2">
            CONTACT US
          </h1>
          <div className="flex flex-row justify-center items-center gap-2 ">
            <Image
              src="/assets/AboutUs/Logo.png"
              width={80}
              height={80}
              alt="Banner"
              priority={true}
              className="hidden md:block"
            />
            <p className="text-center font-poppins font-light md:text-2xl md:w-1/2 px-8 md:px-0 w-full mt-20">
              Let’s Chat! We’re here to help you with any questions or concerns
              you may have!
            </p>
            <Image
              src="/assets/AboutUs/Logo.png"
              width={80}
              height={80}
              alt="Banner"
              priority={true}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  h-full justify-center px-10 md:px-0 mb-10 space-y-10">
        <div className="md:w-1/2 md:self-center">
          <h1 className="font-poppins font-bold text-xl">
            Customer Support Hours:
          </h1>
          <ul className="list-disc list-inside mt-4 font-light">
            <li>Monday to Friday: 9:00 AM - 6:00 PM (PST)</li>
            <li>Saturday: 10:00 AM - 4:00 PM (PST)</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </div>

        <div className="md:w-1/2 md:self-center">
          <h1 className="font-poppins font-bold text-xl">
            Contact Information:
          </h1>
          <ul className="list-disc list-inside mt-4 font-light">
            <li>Phone: (123) 456-7890</li>
            <li>Email: support@baganiblades.com</li>
            <li>
              Address: Bagani Blades 123 Cosplay Lane Suite 456 Imaginaria, CA
              78901
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 md:self-center">
          <h1 className="font-poppins font-bold text-xl">
            For General Inquiries:
          </h1>
          <ul className="list-disc list-inside mt-4 font-light">
            <li>Email: info@baganiblades.com</li>
          </ul>
        </div>

        <div className="md:w-1/2 md:self-center">
          <h1 className="font-poppins font-bold text-xl">
            For Order Status and Support:
          </h1>
          <ul className="list-disc list-inside mt-4 font-light">
            <li>Email: orders@baganiblades.com</li>
          </ul>
        </div>

        <div className="md:w-1/2 md:self-center">
          <h1 className="font-poppins font-bold text-xl">Follow Us:</h1>
          <ul className="list-disc list-inside mt-4 font-light">
            <li>Facebook: / BaganiBlades</li>
            <li>Twitter: @BaganiBlades</li>
            <li>Instagram: @BaganiBladesCosplay</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ">
        <div className="h-[100%] bg-[#dddcdc] w-[550px] mx-4 md:mx-0 rounded-lg sm:px-10 px-4  py-8">
          <h1 className="font-poppins sm:text-4xl text-2xl font-bold text-center">
            Customer Service Form
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              <div className="grid w-full items-center gap-4 mt-4">
                <div className="flex flex-col space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="name"
                            placeholder="Full Name"
                            className="border-2 border-black h-[41px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="Email Address"
                            type="email"
                            className="border-2 border-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="phone"
                            placeholder="Phone Number"
                            className="border-2 border-black"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="subject"
                            placeholder="Subject"
                            className="border-2 border-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <textarea
                            id="message"
                            placeholder="Message"
                            rows="7"
                            className="border-2 border-black rounded-md p-2 resize-none text-sm w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <Button type="submit" className="bg-black">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6 mb-10">
        <p className="md:w-1/2 px-2 font-semibold text-xl text-center">
          Our team is dedicated to ensuring your satisfaction and looks forward
          to assisting you
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Page;
