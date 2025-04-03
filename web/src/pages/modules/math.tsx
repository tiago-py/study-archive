"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';

// Dados dos recursos de matemática
const mathBooks = [
  { name: "Cálculo Vol. 1 - James Stewart", link: "#" },
  { name: "Álgebra Linear - Boldrini", link: "#" },
  { name: "Matemática Básica - Elon Lages Lima", link: "#" },
  { name: "Introdução à Estatística - Mario Triola", link: "#" }
];

const onlineCourses = [
  { name: "Khan Academy - Matemática", link: "https://pt.khanacademy.org/math" },
  { name: "Coursera - Cursos de Matemática", link: "https://www.coursera.org/browse/math-and-logic" },
  { name: "MIT OpenCourseWare - Matemática", link: "https://ocw.mit.edu/courses/mathematics/" }
];

const usefulTools = [
  { name: "Wolfram Alpha", link: "https://www.wolframalpha.com" },
  { name: "GeoGebra", link: "https://www.geogebra.org" },
  { name: "Desmos - Calculadora Gráfica", link: "https://www.desmos.com/calculator" }
];

const Mathematic = () => {
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
                        <Link href={"/modules/math"}>Matemática</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4">Livros de Matemática</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="basic-math">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Matemática Básica
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {mathBooks.slice(0, 2).map((book, index) => (
                            <li key={index}>
                              <Link href={book.link} className="text-blue-400 hover:underline">
                                {book.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="advanced-math">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Matemática Avançada
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {mathBooks.slice(2).map((book, index) => (
                            <li key={index}>
                              <Link href={book.link} className="text-blue-400 hover:underline">
                                {book.name}
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
                    {onlineCourses.map((course, index) => (
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
                    {usefulTools.map((tool, index) => (
                      <li key={index}>
                        <Link href={tool.link} className="text-blue-400 hover:underline" target="_blank">
                          {tool.name}
                        </Link>
                      </li>
                    ))}
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

export default Mathematic;