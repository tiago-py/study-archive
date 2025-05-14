"use client";

import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Aside from '@/components/Aside';
import { BookText, Code, GitBranch, Github } from 'lucide-react';

// Dados dos recursos de GitHub
const essentialBooks = [
  { 
    name: "Pro Git Book", 
    link: "https://git-scm.com/book/en/v2",
    author: "Scott Chacon & Ben Straub",
    level: "Todos os níveis"
  },
  { 
    name: "GitHub Essentials", 
    link: "https://www.packtpub.com/product/github-essentials-second-edition/9781789138337",
    author: "Achilleas Pipinellis",
    level: "Iniciante"
  },
  
];

const onlineCourses = [
  { 
    name: "Git and GitHub for Beginners", 
    link: "https://www.udemy.com/course/git-and-github-bootcamp/",
    platform: "Udemy"
  },
  { 
    name: "Introduction to Git and GitHub", 
    link: "https://www.coursera.org/learn/introduction-git-github",
    platform: "Coursera (Google)"
  },
  { 
    name: "GitHub Learning Lab", 
    link: "https://lab.github.com/",
    platform: "GitHub Official"
  }
];

const practiceResources = [
  { 
    name: "GitHub Docs", 
    link: "https://docs.github.com/",
    description: "Documentação oficial do GitHub"
  },
  { 
    name: "GitHub Skills", 
    link: "https://skills.github.com/",
    description: "Aprenda GitHub através de desafios práticos"
  },
  { 
    name: "GitHub Community", 
    link: "https://github.com/orgs/community/discussions",
    description: "Fórum oficial da comunidade GitHub"
  },
  { 
    name: "GitHub Pages", 
    link: "https://pages.github.com/",
    description: "Hospedagem gratuita para projetos"
  }
];

const advancedResources = [
  {
    name: "GitHub Actions",
    link: "https://github.com/features/actions",
    description: "Automatize seus workflows"
  },
  {
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    description: "IA pair programmer"
  },
  {
    name: "GitHub CLI",
    link: "https://cli.github.com/",
    description: "GitHub na linha de comando"
  }
];

const GithubPage = () => {
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
                        <Link href={"/modules/github"}>GitHub</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
                    <Github className="text-blue-400" />
                    Recursos GitHub
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="grammar-books">
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold cursor-pointer">
                        <div className="flex items-center gap-2">
                          <BookText className="text-blue-400" />
                          Livros Essenciais
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3">
                          {essentialBooks.map((book, index) => (
                            <li key={index} className="hover:bg-slate-800 p-2 rounded">
                              <Link href={book.link} className="text-blue-400 hover:underline block" target="_blank">
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
                        <div className="flex items-center gap-2">
                          <Code className="text-blue-400" />
                          Cursos Online
                        </div>
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
                    <GitBranch className="text-blue-400" />
                    Prática e Ferramentas
                  </h2>
                  <ul className="space-y-3">
                    {practiceResources.map((resource, index) => (
                      <li key={index} className="hover:bg-slate-800 p-3 rounded">
                        <Link 
                          href={resource.link} 
                          className="text-blue-400 hover:underline flex items-center gap-2"
                          target="_blank"
                        >
                          {resource.name}
                          <span className="text-sm text-gray-400">{resource.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Recursos Avançados</h2>
                  <ul className="space-y-3">
                    {advancedResources.map((resource, index) => (
                      <li key={index} className="hover:bg-slate-800 p-3 rounded">
                        <Link 
                          href={resource.link} 
                          className="text-blue-400 hover:underline flex items-center gap-2"
                          target="_blank"
                        >
                          {resource.name}
                          <span className="text-sm text-gray-400">{resource.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Dicas para GitHub</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Fluxo de Trabalho</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Use branches para cada nova funcionalidade/correção</li>
                        <li>• Faça commits atômicos e mensagens descritivas</li>
                        <li>• Siga um modelo de Pull Request</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Boas Práticas</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Mantenha um README.md claro e atualizado</li>
                        <li>• Use .gitignore apropriado</li>
                        <li>• Explore GitHub Actions para CI/CD</li>
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

export default GithubPage;