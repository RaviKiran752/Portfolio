import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio-data";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this to your backend
    console.log(values);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="contact" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-envelope mr-2 text-primary"></i>Contact Me
        </h2>
        <p className="text-gray-600">Get in touch for opportunities or collaboration</p>
      </div>
      
      <motion.div 
        className="bg-white rounded-xl shadow-md p-6 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for job opportunities, project collaboration, or just to say hello. I'm always open to new connections and challenges.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <p className="text-primary">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">LinkedIn</h4>
                  <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{contact.linkedin.username}</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="fab fa-github"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">GitHub</h4>
                  <a href={contact.github.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{contact.github.username}</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
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
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="resize-none" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
