import React from "react";
import { PartOne } from '../../components/PartOne/PartOne';
import { Advantage } from "../../components/Advantage/Advantage";
import { Clothes } from "../../components/Сlothes/Clothes";
import { NewSale } from "../../components/NewSale/NewSale";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { LatestFromBlog } from "../../components/LatestFromBlog/LatestFromBlog";

const HomePage = () => {
    return (
        <>
            <PartOne />
            <Advantage />
            <Clothes typeCategory={'women'} />
            <Clothes typeCategory={'men'} />
            <NewSale />
            <Subscribe /> 
            <LatestFromBlog />
        </>
    )
}
export {HomePage}