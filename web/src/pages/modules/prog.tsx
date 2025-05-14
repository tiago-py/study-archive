"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { Code } from 'lucide-react';

// Dados dos recursos de Programação
const programmingBooks = [
 { 
    name: "The Pragmatic Programmer", 
    link: "https://ia801603.us.archive.org/24/items/AndrewHuntDavidThomasThePragmaticProgrammerFromJourneymanToMasterAddisonWesleyLongman2000/Andrew%20Hunt%2C%20David%20Thomas-The%20Pragmatic%20Programmer_%20From%20Journeyman%20to%20Master-Addison%20Wesley%20Longman%20%282000%29.pdf",
    author: "Andrew Hunt & David Thomas",
    category: "Carreira"
  },
  { 
    name: "Entendendo Algoritmos: Um guia ilustrado para programadores e outros curiosos", 
    link: "1PFEXveiwGthGym4jgq8XvKLXn8VSToBl",
    author: "Aditya Y. Bhargava",
    category: "Estruturas de dados e algoritmos."
  },
  { 
    name: "JavaScript: The Good Parts", 
    link: "https://ia801209.us.archive.org/26/items/javascript.-the-good-parts_202401/javascript.%20the%20good%20parts.pdf",
    author: "Douglas Crockford",
    category: "JavaScript"
  }
  { 
    name: "Livros Diversos", 
    link: "https://drive.google.com/drive/folders/1nXET_nY2Fxo02ks2OhnRlTj09GAtsOMJ?usp=drive_link",
    author: "Vários autores",
    category: "Livros e Coleções"
  }
];

const frameworksResources = [
  { 
    name: "React Documentation", 
    link: "https://react.dev",
    language: "JavaScript",
    type: "Frontend"
  },
  { 
    name: "Vue.js Guide", 
    link: "https://vuejs.org/guide",
    language: "JavaScript",
    type: "Frontend"
  },
  { 
    name: "Angular Documentation", 
    link: "https://angular.io/docs",
    language: "TypeScript",
    type: "Frontend"
  }
];

const onlineCourses = [
  { 
    name: "freeCodeCamp", 
    link: "https://www.freecodecamp.org",
    focus: "Full Stack",
    free: true
  },
  { 
    name: "Codecademy", 
    link: "https://www.codecademy.com",
    focus: "Diversas linguagens",
    free: false
  },
  { 
    name: "The Odin Project", 
    link: "https://www.theodinproject.com",
    focus: "Web Development",
    free: true
  }
];

const devTools = [
  { name: "GitHub", link: "https://github.com", category: "Versionamento" },
  { name: "Stack Overflow", link: "https://stackoverflow.com", category: "Q&A" },
  { name: "CodePen", link: "https://codepen.io", category: "Prototipagem" },
  { name: "VS Code", link: "https://code.visualstudio.com", category: "Editor" }
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
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="text-blue-400" />
                    Recursos de Programação
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="programming-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Livros Recomendados
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {programmingBooks.map((book, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link href={book.link} className="text-blue-400 hover:underline block">
                                <span className="font-medium">{book.name}</span>
                                <span className="text-sm text-gray-400 block">
                                  {book.author} • {book.category}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="frameworks-resources">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Frameworks e Bibliotecas
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {frameworksResources.map((framework, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link 
                                href={framework.link} 
                                className="text-blue-400 hover:underline block"
                                target="_blank"
                              >
                                <span className="font-medium">{framework.name}</span>
                                <span className="text-sm text-gray-400 block">
                                  {framework.language} • {framework.type}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="online-courses">
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
                                <span className="text-sm text-gray-400 block">
                                  {course.focus} • {course.free ? 'Gratuito' : 'Pago'}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ferramentas para Devs</h2>
                  <ul className="space-y-3">
                    {devTools.map((tool, index) => (
                      <li key={index} className="hover:bg-slate-800 p-3 rounded flex justify-between items-center">
                        <Link 
                          href={tool.link} 
                          className="text-blue-400 hover:underline flex-grow"
                          target="_blank"
                        >
                          {tool.name}
                        </Link>
                        <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                          {tool.category}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Atalhos do VS Code</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Geral</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + P</span> - Buscar arquivos</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + Shift + P</span> - Command Palette</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + ,</span> - Configurações</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Edição</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + D</span> - Selecionar próxima ocorrência</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Alt + ↑/↓</span> - Mover linha</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + /</span> - Comentar linha</li>
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

export default Prog;