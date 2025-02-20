"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-x-4">
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>HTML/CSS</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Selenium</li>
          <li>GIT</li>
          <li>AWS</li>
          <li>Agile</li>
          <li>React</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
id: "education",
content: (
  <ul className="list-disc pl-5">
    <li className="mb-2">
      <strong>Master of Science in Computer Science</strong>  
      <br /> <span className="text-primary-500">University of the Pacific, CA</span>  
      <br /> <span className="font-semibold">GPA: 4.0 / 4.0</span>
    </li>
    <li>
      <strong>Bachelor of Technology in Computer Science</strong>  
      <br /> <span className="text-primary-500">B V Raju Institute of Technology, India</span>  
      <br /> <span className="font-semibold">GPA: 3.8 / 4.0</span>
    </li>
  </ul>
),


  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics Professional Certificate</li>
        <li>Palo Alto Cybersecurity Foundation</li>
        <li>Palo Alto Cloud Security & Network Security </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a passionate and enthusiastic graduate student with a deep interest 
          in technology. With a strong foundation in coding 
          and problem-solving, I am also skilled in 
          Machine Learning and Data Analysis. My goal is to build 
          innovative and efficient software solutions while expanding 
          my expertise across multiple tech domains. I'm always eager 
          to learn and grow in the ever-evolving world of technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
