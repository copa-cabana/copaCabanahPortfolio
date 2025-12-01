import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Your Name",
};

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ]
  
  return (
    <>
      <HeroSub
        title='Tech Blog'
        description='YOUR BLOG PAGE DESCRIPTION - Insights and thoughts on technology'
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  )
}

export default BlogPage