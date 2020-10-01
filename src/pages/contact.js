import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh">
    <SEO title="Contact" />
    <div className="col-12" style={{padding:`0 52px`}}>
      <h1 className="font-lust">Make us read something for free</h1>
      <p>Do you have a project? An idea? Want to talk about the last and horrible GoT season? Just contact us. We value communication and that's why whatever you send us, we'll read it and probably get back to you ASAP.</p>
      <form action="https://getform.io/f/ffa9b6ab-49c1-4b14-be9b-5c39646da3ae" method="POST" className="grid" id="contact-form">
        <div className="col-12">
          <label>Who are you?</label>
          <br></br>
          <input type="text" name="name" required/>
        </div>
        <div className="col-12">
          <label>What's your email?</label>
          <br></br>
          <input type="email" name="email" required/>
        </div>
        <div className="col-12">
          <label>What do you want to talk about?</label>
          <br></br>
          <textarea name="message" required form="contact-form" rows="6" style={{resize:`none`}}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
