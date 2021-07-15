import React from "react";
import { TransitioningArticle } from "../styled-components/TransitioningArticle";

interface Props {
  url: string;
  language: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<Props> = ({
  url,
  language,
  title,
  description,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <TransitioningArticle className="bg-dusk w-full h-auto mt-10 py-10 px-8 md:transform md:hover:scale-110">
        <h4 className="uppercase text-white text-xs tracking-widest leading-loose">
          {language}
        </h4>
        <h3 className="text-xl leading-tight font-semibold text-white">
          {title}
        </h3>
        <p className="text-white opacity-50 text-xs mt-2">{description}</p>
      </TransitioningArticle>
    </a>
  );
};

export default ProjectCard;
