import React, { Component, Fragment, useEffect, useState } from 'react'
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import NewsLetter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';

// import data from "pages/api/data.json"

function Home({resources}) {

  return (
    <Layout>
      <ResourceHighlight
        resources={resources.slice(0, 2)}
      />
      <NewsLetter/>
      <ResourceList
        resources={resources.slice(2)}
      />
      <Footer/>
    </Layout>
  )
}

// is called every time you will visit the page

// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {

  const resData = await fetch(`${process.env.API_URL}/resources`);

  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}

export default Home;
