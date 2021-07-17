import Image from "next/image";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import useScrollHandler from "../hooks/useScrollHandler";
import { TransitioningArticle } from "../styled-components/TransitioningArticle";

export default function Home() {
  const scroll = useScrollHandler(832);

  useEffect(() => {
    const projects: any = document.getElementById("projects");
    if (scroll) {
      projects.classList.add("bg-dusk", "pb-4");
    } else {
      projects.classList.remove("bg-dusk", "pb-4");
    }
  }, [scroll]);

  return (
    <div className="md:grid md:place-items-center">
      <div className="flex flex-col md:flex-row items-stretch">
        <div>
          <h1 className="text-white text-6xl font-bold tracking-wide leading-tight">
            Hello, I’m Ferran.
          </h1>
          <div className="leading-loose">
            <p className="text-sm text-white mt-11 leading-loose">
              I&#39;m a Full Stack Developer who loves to build things! 💙
              <br /> I spend my time streaming on YouTube and tinkering with new
              tech 🚀 apart from working at{" "}
              <a
                className="opacity-50 underline"
                href="https://www.sigaramtech.com"
                rel="noopener noreferrer"
              >
                Sigaram Tech.
              </a>
              <br />
              Hit me up on{" "}
              <a
                className="opacity-50 underline"
                href="https://www.twitter.com/sulaimanferran"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              if you want to talk to me about Tech and Fitness!
            </p>
          </div>
          <div className="flex items-center mt-11">
            <Image
              src="/me.jpg"
              className="rounded-full "
              height={60}
              width={60}
              alt="Ferran"
            />
            <ul className="flex text-white ml-4">
              <li className="mx-4">
                <a
                  href="https://twitter.com/sulaimanferran"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 fill-current"
                  >
                    <title>Twitter icon</title>
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
                  </svg>
                  <span className="">Twitter</span>
                  <div className="w-8 p-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="flex-none stroke-current"
                    >
                      <title>External link icon</title>
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li className="mx-4">
                <a
                  href="https://github.com/ferran9908/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 fill-current"
                  >
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                  <span className="">GitHub</span>
                  <div className="w-8 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="flex-none stroke-current"
                    >
                      <title>External link icon</title>
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://raw.githubusercontent.com/ferran9908/CV/master/Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TransitioningArticle className="bg-dusk w-full h-32 mt-10 py-10 px-8 md:transform md:hover:scale-110">
              <h3 className="text-xl leading-tight font-semibold text-white">
                Resume
              </h3>
              <p className="text-white text-xs mt-2">
                Go here if you wanna know what I&#39;ve been upto 🗓
              </p>
            </TransitioningArticle>
          </a>
          <a
            href="https://ferran.hashnode.dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TransitioningArticle className="bg-dusk w-full h-32 mt-10 py-10 px-8 md:transform md:hover:scale-110">
              <h3 className="text-xl leading-tight font-semibold text-white">
                Blog
              </h3>
              <p className="text-white text-xs mt-2">
                My thoughts on the latest and greatest tech developments 🚀
              </p>
            </TransitioningArticle>
          </a>
        </div>
        <div className="md:px-12 items-stretch md:h-screen md:overflow-y-auto no-scrollbar">
          <div
            style={{
              marginLeft: "-1.5rem",
              marginTop: "10px",
              marginRight: "-1.5rem",
            }}
            className="md:hidden z-10 shadow-2xl sticky top-0"
          >
            <p
              id="projects"
              className="pt-4 px-8 text-white font-semibold text-xs uppercase tracking-widest"
            >
              Projects
            </p>
          </div>
          <ProjectCard
            url="https://github.com/ferran9908/Async-Frontend"
            language="Typescript"
            title="WatchAsync"
            description="Watch movies along with your friends online! Sync your play/pause events with all your friends!"
          />
          <ProjectCard
            url="https://github.com/ferran9908/SafeStreets"
            language="Java"
            title="SafeStreets"
            description="Proof of Concept: Navigate through places with low crime rates to increase safety."
          />
          <ProjectCard
            url="https://github.com/ferran9908/tsxpress"
            language="Typescript"
            title="TsXpress"
            description="NPM Package - Generates an opinionated Typescript-Express project structure using MVC pattern."
          />
          <ProjectCard
            url="https://github.com/ferran9908/Decentralized-Storage-System"
            language="Javascript & Solidity"
            title="Decentralized Storage System"
            description="A storage solution to store data on the internet for free forever! Using IPFS to store data & smart contracts to maintain data integrity."
          />
        </div>
      </div>
    </div>
  );
}
