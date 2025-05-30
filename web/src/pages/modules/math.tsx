"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { BookOpen, Calculator } from 'lucide-react';

// Dados dos recursos de matemática
const mathBooks = [
  { name: "Cálculo Vol. 1", link: "https://ia601303.us.archive.org/23/items/calculo-vol-1-9-ed-james-stewart-daniel-clegg-saleem-watson-cengage-2022/C%C3%A1lculo%20Vol%201%209Ed%20-%20James%20Stewart%2C%20Daniel%20Clegg%2C%20Saleem%20Watson%20-%20Cengage%20%282022%29.pdf", author: "James Stewart" },
  { name: "Álgebra Linear", link: "https://dn790001.ca.archive.org/0/items/algebra-linear-colecao-schaum-4a-ed.-seymour-lipschutz-e-marc-lipson/%C3%81lgebra%20Linear%20Cole%C3%A7%C3%A3o%20Schaum%20%284%C2%AA%20ed.%29%20-%20Seymour%20Lipschutz%20e%20Marc%20Lipson.pdf", author: "Boldrini" },
  { name: "Matemática Básica", link: "https://archive.org/details/a_matematica_do_ensino_medio/Volume%201/", author: "Elon Lages Lima" },
  { name: "Introdução à Estatística", link: "https://archive.org/details/introducaoaestat0000trio", author: "Mario Triola" }
];

const onlineCourses = [
  { name: "Khan Academy - Matemática", link: "https://pt.khanacademy.org/math", platform: "Khan Academy" },
  { name: "Cursos de Matemática", link: "https://www.coursera.org/browse/math-and-logic", platform: "Coursera" },
  { name: "MIT OpenCourseWare", link: "https://ocw.mit.edu/courses/mathematics/", platform: "MIT" }
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
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="text-blue-400" />
                    Recursos de Matemática
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Livros Recomendados
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {mathBooks.map((book, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link href={book.link} className="text-blue-400 hover:underline block">
                                <span className="font-medium">{book.name}</span>
                                <span className="text-sm text-gray-400 block">por {book.author}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="courses">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Cursos Online
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {onlineCourses.map((course, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link 
                                href={course.link} 
                                className="text-blue-400 hover:underline block"
                                target="_blank"
                              >
                                <span className="font-medium">{course.name}</span>
                                <span className="text-sm text-gray-400 block">{course.platform}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <Calculator className="text-blue-400" />
                    Ferramentas e Calculadoras
                  </h2>
                  <ul className="space-y-3">
                    {usefulTools.map((tool, index) => (
                      <li key={index} className="hover:bg-slate-800 p-3 rounded">
                        <Link 
                          href={tool.link} 
                          className="text-blue-400 hover:underline flex items-center gap-2"
                          target="_blank"
                        >
                          {tool.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Fórmulas Importantes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Álgebra</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">(a + b)² = a² + 2ab + b²</span></li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Bhaskara: x = [-b ± √(b²-4ac)]/2a</span></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Geometria</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">A = πr²</span> - Área do círculo</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">V = (4/3)πr³</span> - Volume da esfera</li>
                      </ul>
                    </div>
                  </div>
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