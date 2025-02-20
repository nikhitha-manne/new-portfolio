"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 py-24 text-center">
      <h5 className="text-3xl font-bold text-white">Let's Connect</h5>
      <p className="text-[#ADB7BE] mt-4 max-w-xl mx-auto">
        I'm currently looking for new opportunities, my inbox is 
        always open. Whether you have a question or just want to 
        say hi, I'll try my best to get back to you!
      </p>

      {/* Contact Information */}
      <div className="mt-6 space-y-4">
        <p className="text-lg text-white">
          📧 Email:{" "}
          <a
            href="mailto:s_manne@u.pacific.edu"
            className="text-primary-500 hover:underline"
          >
            s_manne@u.pacific.edu
          </a>
        </p>
        <p className="text-lg text-white">
          🔗 LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/sai-nikhitha-chowdary-manne-b1698a214/"
            target="_blank"
            className="text-primary-500 hover:underline"
          >
            Connect on LinkedIn
          </Link>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-6 gap-4">
        <Link
          href="https://github.com/YOUR-GITHUB-USERNAME"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sai-nikhitha-chowdary-manne-b1698a214/"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30} />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
