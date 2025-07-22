import React from "react";
import { Heading, Text, Column, Schema, Flex, Button, Media } from "@once-ui-system/core";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="56">
      <div
        style={{
          width: 160,
          height: 160,
          margin: "0 auto",
          position: "relative",
          display: "block",
          overflow: "hidden",
          borderRadius: "50%",
          border: "2px solid #eee",
          background: "#f8f8f8"
        }}
      >
        <img
          src="/images/profile.jpg"
          alt="Ali Cruz III portrait"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
      <Schema
        as="webPage"
        baseURL="https://ali-cruz-portfolio.local"
        path="/"
        title="Ali Cruz III Portfolio"
        description="Landing page for Ali Cruz III, Computer Information Systems graduate."
        image="/api/og/generate?title=Ali%20Cruz%20III"
        author={{
          name: "Ali Cruz III",
          url: "https://linkedin.com/in/ali-cruz-iii",
          image: ""
        }}
      />
      <Heading variant="display-strong-l" align="center" paddingBottom="8">
        Hi, I'm Ali Cruz III
      </Heading>
      <Text variant="heading-default-xl" align="center" onBackground="neutral-weak" paddingBottom="16">
        Recent graduate of Lehman College (B.S. in Computer Information Systems)
      </Text>
      <Text align="center" paddingBottom="16">
        I'm passionate about technology, teamwork, and helping organizations run smoothly. I love building websites, organizing digital content, and collaborating on tech projects. I'm reliable, adaptable, and always eager to learn new tools and skills.
      </Text>
      <Flex gap="l" horizontal="center" paddingBottom="24">
        <Button href="mailto:a.c.shasho@gmail.com" variant="primary" size="m" label="Email Me" />
        <Button href="https://linkedin.com/in/ali-cruz-iii" target="_blank" rel="noopener noreferrer" variant="secondary" size="m" label="LinkedIn" />
      </Flex>
      <Text align="center" onBackground="neutral-weak" paddingBottom="8">
        Bronx, NY &bull; (646) 238-3719
      </Text>
      <Text align="center" variant="body-default-s" onBackground="neutral-weak">
        Google IT Support Fundamentals Certified &bull; Experienced in HTML, CSS, Microsoft Office, and Google Workspace
      </Text>
    </Column>
  );
}
