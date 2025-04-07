"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { BookText } from 'lucide-react';

// Dados dos recursos de Inglês
const grammarBooks = [
  { 
    name: "Basic Grammar in Use", 
    link: "https://drive.google.com/uc?export=download&id=1QU84jvHyA6wsIWBTOxW9In52cgxmlhvm",
    author: "Raymond Murphy",
    level: "Básico"
  },
  { 
    name: "Essential English Grammar", 
    link: "https://drive.google.com/uc?export=download&id=1O_9ng_Ll48xN6LhA6G1p2NaEGYhrLc0r",
    author: "Murphy",
    level: "Intermediário"
  }
];

const vocabularyBooks = [
  { 
    name: "Practical English Usage", 
    link: "https://drive.google.com/uc?export=download&id=1wIcBjQbYjg-GZ4PbW-ACoURgVHuy7acH",
    author: "Michael Swan",
    level: "Avançado"
  }
];

const onlineCourses = [
  { 
    name: "BBC Learning English", 
    link: "https://www.bbc.co.uk/learningenglish/",
    platform: "BBC"
  },
  { 
    name: "English Grammar Course", 
    link: "https://www.udemy.com/topic/english-grammar/",
    platform: "Udemy"
  }
];

const practiceResources = [
  { name: "Cambridge Dictionary", link: "https://dictionary.cambridge.org/us/" },
  { name: "Duolingo English", link: "https://pt.duolingo.com/course/en/pt/Aprenda-ingl%C3%AAs" },
  { name: "Grammarly", link: "https://www.grammarly.com/" }
];

const English = () => {
  return (
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
                        <Link href={"/modules/english"}>Inglês</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <BookText className="text-blue-400" />
                    Recursos de Inglês
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="grammar-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Gramática
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {grammarBooks.map((book, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link href={book.link} className="text-blue-400 hover:underline block">
                                <span className="font-medium">{book.name}</span>
                                <span className="text-sm text-gray-400 block">
                                  {book.author} • {book.level}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="vocabulary-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Vocabulário
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {vocabularyBooks.map((book, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link href={book.link} className="text-blue-400 hover:underline block">
                                <span className="font-medium">{book.name}</span>
                                <span className="text-sm text-gray-400 block">
                                  {book.author} • {book.level}
                                </span>
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Prática e Ferramentas</h2>
                  <ul className="space-y-3">
                    {practiceResources.map((resource, index) => (
                      <li key={index} className="hover:bg-slate-800 p-3 rounded">
                        <Link 
                          href={resource.link} 
                          className="text-blue-400 hover:underline flex items-center gap-2"
                          target="_blank"
                        >
                          {resource.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dicas de Aprendizado</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Gramática</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Pratique com exercícios diários</li>
                        <li>• Anote suas dúvidas e revise semanalmente</li>
                        <li>• Use flashcards para tempos verbais</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Vocabulário</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Aprenda 5 novas palavras por dia</li>
                        <li>• Use as palavras em frases</li>
                        <li>• Revise semanalmente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Aside>
  );
};

export default English;