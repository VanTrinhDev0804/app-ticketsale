import React from "react";
import  {useParams} from 'react-router-dom'
import { IParams } from "./types";

const generatePage = (name: string) => {
    const page = () => require(`./pages/${name}`).default

    try {
        return React.createElement(page())
    } catch (error) {
        return <h2> Not Found</h2>
    }

}

const PageRender = () => {
    const { page, tag, id }: IParams = useParams();

     let name = '';
     if (page) {
         name = tag? `${page}/${tag}`: `${page}`
     }
    // let name = page === undefined ? "":  `${page}`;
    return generatePage(name)
}   

export default PageRender