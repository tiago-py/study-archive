import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';

// Dados dos livros de inglês (pode ser alterado posteriormente)
const englishBooks = [
  { name: "Basic Grammar in Use - Raymond Murphy", link: "https://drive.google.com/uc?export=download&id=1QU84jvHyA6wsIWBTOxW9In52cgxmlhvm" },
  { name: "Essential English Grammar - Murphy", link: "https://drive.google.com/uc?export=download&id=1O_9ng_Ll48xN6LhA6G1p2NaEGYhrLc0r" },
];
const vocabularyBooks = [
  { name: "Pratical english Usage - Michael Swan", link: "https://drive.google.com/uc?export=download&id=1wIcBjQbYjg-GZ4PbW-ACoURgVHuy7acH" }
];


const English = () => {
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
                        <Link href={"/modules/english"}>Inglês</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4">Livros de Inglês</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="grammar-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        Gramática
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-2">
                          {englishBooks.slice(0, 4).map((book, index) => (
                            <li key={index}>
                              <Link href={book.link} className="text-blue-400 hover:underline">
                                {book.name}
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
                        <ul className="mt-2 space-y-2">
                          {vocabularyBooks.slice(0,2).map((book, index) => (
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Recursos Adicionais</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="https://dictionary.cambridge.org/us/" className="text-blue-400 hover:underline">
                        Dicionário Cambridge Online
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.bbc.co.uk/learningenglish/" className="text-blue-400 hover:underline">
                        BBC Learning English
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pt.duolingo.com/course/en/pt/Aprenda-ingl%C3%AAs" className="text-blue-400 hover:underline">
                        Duolingo - Inglês
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

export default English;