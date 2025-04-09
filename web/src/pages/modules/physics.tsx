"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { BookA } from 'lucide-react';

const physicsBooks = [
  { name: "Física - Volume Único", link: "#", author: "Alberto Gaspar" },
  { name: "Fundamentos de Física - Vol. 1 a 4", link: "#", author: "David Halliday, Robert Resnick, Jearl Walker" },
  { name: "Tópicos de Física", link: "#", author: "Gelson Iezzi et al." }
];

const onlineCourses = [
  { name: "Curso de Física Completo", link: "https://www.udemy.com/course/curso-de-fisica-completo/", platform: "Udemy" },
  { name: "Introdução à Física", link: "https://pt.khanacademy.org/science/physics", platform: "Khan Academy" },
  { name: "Física Básica", link: "https://www.coursera.org/learn/fisica-basica", platform: "Coursera" }
];

const usefulTools = [
  { name: "PhET Simulações Interativas", link: "https://phet.colorado.edu/pt_BR/" },
  { name: "Khan Academy - Física", link: "https://pt.khanacademy.org/science/physics" },
  { name: "Instituto de Física da USP", link: "https://portal.if.usp.br/" }
];

const Physics = () => {
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
                        <Link href={"/modules/physics"}>Física</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <BookA className="text-blue-400" />
                    Recursos de Física
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Livros Recomendados
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {physicsBooks.map((book, index) => (
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ferramentas e Referências</h2>
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dicas e truques</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Conceitos Básicos</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Velocidade Média:</strong> distância / tempo.</li>
                        <li><strong>Força:</strong> massa × aceleração (F = m × a).</li>
                        <li><strong>Energia Cinética:</strong> (mv²) / 2.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Unidades e Dicas</h3>
                      <ul className="space-y-2 text-sm">
                        <li>Use SI (Sistema Internacional): metro, segundo, kg, etc.</li>
                        <li>Verifique as unidades antes de resolver problemas.</li>
                        <li>Faça desenhos e diagramas sempre que possível para visualizar os sistemas.</li>
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

export default Physics;
