"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { FileSpreadsheet } from 'lucide-react';

// Dados dos recursos de Excel
const excelBooks = [
  { name: "Excel 2019 Bible", link: "#", author: "Michael Alexander" },
  { name: "Power Pivot and Power BI", link: "#", author: "Michael Alexander" },
  { name: "Excel Formulas and Functions", link: "#", author: "Paul McFedries" },
  { name: "Dashboards for Excel", link: "#", author: "Jordan Goldmeier" }
];

const onlineCourses = [
  { name: "Microsoft Excel - Curso Completo", link: "https://www.udemy.com/topic/excel/", platform: "Udemy" },
  { name: "Excel Skills for Business", link: "https://www.coursera.org/specializations/excel", platform: "Coursera" },
  { name: "Excel Essentials", link: "https://www.linkedin.com/learning/excel-essential-training-microsoft-365-apps", platform: "LinkedIn Learning" }
];

const usefulTools = [
  { name: "Microsoft Excel Help Center", link: "https://support.microsoft.com/excel" },
  { name: "ExcelJet - Atalhos e Dicas", link: "https://exceljet.net/" },
  { name: "Chandoo - Excel Tips & Tricks", link: "https://chandoo.org/" }
];

const templates = [
  { name: "Modelos Financeiros", link: "#" },
  { name: "Controle de Estoque", link: "#" },
  { name: "Dashboard de Vendas", link: "#" }
];

const Excel = () => {
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
                        <Link href={"/modules/excel"}>Excel</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <FileSpreadsheet className="text-blue-400" />
                    Recursos de Excel
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Livros Recomendados
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {excelBooks.map((book, index) => (
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
                    <AccordionItem value="templates">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Modelos Prontos
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {templates.map((template, index) => (
                            <li key={index}>
                              <Link href={template.link} className="text-blue-400 hover:underline">
                                {template.name}
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Atalhos Úteis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Geral</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + N</span> - Novo arquivo</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + S</span> - Salvar</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">F12</span> - Salvar como</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Formatação</h3>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + B</span> - Negrito</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Ctrl + 1</span> - Abrir formatação</li>
                        <li><span className="font-mono bg-slate-800 px-2 py-1 rounded">Alt + H + O + I</span> - Autoajustar coluna</li>
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

export default Excel;