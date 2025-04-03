"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';

// Dados dos recursos de programação
const programmingBooks = [
  { name: "Clean Code - Robert C. Martin", link: "#" },
  { name: "The Pragmatic Programmer", link: "#" },
  { name: "Design Patterns - Gang of Four", link: "#" },
  { name: "JavaScript: The Good Parts", link: "#" }
];

const frameworksResources = [
  { name: "React Official Documentation", link: "https://react.dev" },
  { name: "Vue.js Guide", link: "https://vuejs.org/guide" },
  { name: "Angular Documentation", link: "https://angular.io/docs" }
];

const courses = [
  { name: "freeCodeCamp", link: "https://www.freecodecamp.org" },
  { name: "Codecademy", link: "https://www.codecademy.com" },
  { name: "The Odin Project", link: "https://www.theodinproject.com" }
];

const Prog = () => {
  return (
    <>
      <Aside>
        <div className="flex min-h-screen bg-slate-950 text-white flex-1 p-6">
          <main className="flex-1 p-6">
            <div className='mx-auto max-w-7xl'>
              <div className="flex items-center justify-between mb-8">
                <Breadcrumb className='mt-6'>
                  <BreadcrumbList className='text-2xl md:text-3xl text-white items-center flex text-center'>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/" className='text-2xl font-light'>Início</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={"/modules/prog"}>Programação</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4">Livros de Programação</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="programming-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Fundamentos
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {programmingBooks.map((book, index) => (
                            <li key={index}>
                              <Link href={book.link} className="text-blue-400 hover:underline">
                                {book.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="frameworks-resources">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Frameworks
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {frameworksResources.map((resource, index) => (
                            <li key={index}>
                              <Link href={resource.link} className="text-blue-400 hover:underline" target="_blank">
                                {resource.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Cursos Online</h2>
                  <ul className="space-y-2">
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link href={course.link} className="text-blue-400 hover:underline" target="_blank">
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ferramentas Úteis</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="https://github.com" className="text-blue-400 hover:underline" target="_blank">
                        GitHub
                      </Link>
                    </li>
                    <li>
                      <Link href="https://stackoverflow.com" className="text-blue-400 hover:underline" target="_blank">
                        Stack Overflow
                      </Link>
                    </li>
                    <li>
                      <Link href="https://codepen.io" className="text-blue-400 hover:underline" target="_blank">
                        CodePen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Aside>
    </>
  );
};

export default Prog;