"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { BookA } from 'lucide-react';

const portugueseBooks = [
  { name: "Moderna Gramática Portuguesa", link: "#", author: "Evanildo Bechara" },
  { name: "Nova Gramática do Português Contemporâneo", link: "#", author: "Celso Cunha e Lindley Cintra" },
  { name: "Gramática Escolar da Língua Portuguesa", link: "#", author: "Napoleão Mendes de Almeida" }
];

const onlineCourses = [
  { name: "Português para concursos", link: "https://www.udemy.com/course/portugues-para-concursos/", platform: "Udemy" },
  { name: "Português – Gramática, Redação e Interpretação", link: "https://www.educamaisbrasil.com.br/cursos-online/portugues", platform: "Educa Mais Brasil" },
  { name: "Curso de Português - Interpretação de Textos", link: "https://www.coursera.org/learn/compreensao-textos", platform: "Coursera" }
];

const usefulTools = [
  { name: "Michaelis - Dicionário Online", link: "https://michaelis.uol.com.br/" },
  { name: "Nova Ortografia da Língua Portuguesa", link: "https://www.academia.org.br/nova-ortografia" },
  { name: "Gramatiqueando - Gramática Online", link: "https://www.gramatiqueando.com.br/" }
];

const Portuguese = () => {
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
                        <Link href={"/modules/portuguese"}>Português</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <BookA className="text-blue-400" />
                    Recursos de Português
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Livros Recomendados
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {portugueseBooks.map((book, index) => (
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
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Gramática</h3>
                      <ul className="space-y-2 text-sm">
                        <li>Evite pleonasmos como <i>&quot;subir para cima&quot;</i>.</li>
                        <li>Prefira <i>&quot;haver&quot;</i> no lugar de <i>&quot;ter&quot;</i> em textos formais.</li>
                        <li>Atenção à crase: use quando há a fusão de &quot;a&quot; com &quot;a&quot; (ex: à escola).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Ortografia</h3>
                      <ul className="space-y-2 text-sm">
                        <li>Desde 2009, não se usa mais o trema em palavras como <i>linguiça</i> e <i>frequente</i>.</li>
                        <li>Palavras com hífen mudaram: <i>anti-inflamatório</i> → <i>anti-inflamatório</i> (sem mudança); <i>auto escola</i> → <i>autoescola</i>.</li>
                        <li>Revise acentuação de paroxítonas terminadas em &quot;i&quot; e &quot;u&quot; depois de ditongos: <i>feiúra</i> virou <i>feiura</i>.</li>
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

export default Portuguese;
