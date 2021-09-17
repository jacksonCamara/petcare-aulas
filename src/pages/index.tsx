/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import MedicosVeterinarios from "../components/medicosVeterinarios";
import { dom } from "@fortawesome/fontawesome-svg-core";
import ServicosEsteticos from "../components/servicosEsteticos";
import { ServicosVeterinarios } from "../components/servicoVeterinario";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
                    rel="stylesheet"
                />
                <style>{dom.css()}</style>
            </Head>
            <ServicosEsteticos />
            <ServicosVeterinarios />
            <MedicosVeterinarios />
        </div>
    );
};

export default Home;
