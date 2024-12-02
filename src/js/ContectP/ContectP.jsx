import React, { useLayoutEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";
import ContectBanner from "../ContectBanner/ContextBanner";
import { Button, Form, Input } from "antd";
import $ from "jquery"
import { imagePath } from "../../media/imagePath";

function ContectP() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const submitForm = (values) => {
    console.log("values",values);

    var body =  '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#f2f2f2;padding:20px"><h2 style="color:#dc9d7e">Omkar Nature Farm</h2><p>Hello</p><p>Thank you for your interest in our products/services.</p><p>Please check your enquiry which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left;color:#dc9d7e"><strong>Name:</strong></td><td style="text-align:left">' + values.name + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Email:</strong></td><td style="text-align:left">' + values.email + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Subject:</strong></td><td style="text-align:left">' + values.subject + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Message:</strong></td><td style="text-align:left">' + values.message + '</td></tr><tr><td style="text-align:left;color:#dc9d7e"><strong>Mobile Number:</strong></td><td style="text-align:left">' + values.mobileNo + '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at Omkar Nature Farm</p></div></body></html>';

        $.post("https://skdm.in/server/v1/send_lead_mail.php", {
            toEmail: "formomkarnature@gmail.com",
            fromEmail: "skdmlead@gmail.com",
            bccMail: "skdmlead@gmail.com",
            mailSubject: "New Customer Lead",
            mailBody: body,
            accountName: "Omkar nature farm",
            accountLeadSource: "omkarnaturefarm.in",
            accountLeadName: values.name,
            accountLeadEmail: values.email,
            accountLeadPhone: values.contact,
        },

            function (dataa, status) {
                console.log('data :' + dataa);
                console.log("name:" + values);

            });

        alert("Your Form has Submitted Our team will contact with You  soon.");
        values.preventDefault()
        return false;
  };
  return (
    <>
      <ContectBanner />

      {/* ======================================= contact Us ================================== */}
      <section id="contact" className="contact">
        <div
          className="titleSection aos-init aos-animate"
          data-aos="fade-right"
        >
          <Fade direction="right">
            <h1 className="special-h2">Farmstay near Wada</h1>
          </Fade>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-4 p-0 m-0">
              <div className="contactCard">
                <div className="contactIcon">
                  <span className="material-symbols-outlined">
                    <CiLocationOn />
                  </span>
                </div>
                <div className="contactText">
                  <p>
                    At:Ambhai, post:kanchad, Tal:Wada, Wada, Maharashtra 421303
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 m-0">
              <div className="contactCard">
                <div className="contactIcon">
                  <span className="material-symbols-outlined">
                    <IoMdCall />
                  </span>
                </div>
                <div className="contactText">
                  <a href="tel:+91 7028725777">
                    <p>+91 8976256998</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 m-0">
              <div className="contactCard">
                <div className="contactIcon">
                  <span className="material-symbols-outlined">
                    <CiMail />
                  </span>
                </div>
                <div className="contactText">
                  <p>formomkarnature@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="titleSection mt-5">
          <h4 style={{ fontSize: "2rem" }}>Omkar Nature Farm</h4>
        </div>
        <div className="contactImgIcon">
          <img
            src={imagePath.hi}
            alt="Farmstay near Wada"
          />
        </div>
        <div className="container">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-lg-6 p-0 m-0">
              <Form
                className="php-email-form"
                layout="vertical"
                onFinish={submitForm}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <Form.Item 
                    name="name" 
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your name!',
                      },
                    ]}
                    >
                      <Input
                        placeholder="Enter a name"
                        className="form-control custName custNameValidation"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group col-md-6">
                    <Form.Item 
                    name="subject" 
                    label="Subject"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter subject!',
                      },
                    ]}
                    >
                      <Input
                        placeholder="Enter subject"
                        className="form-control custPhone custPhoneValidation"
                      />
                    </Form.Item>
                  </div>
                <div className="form-group col-lg-6">
                  <Form.Item 
                  name="email"
                   label="Email"
                   rules={[
                    {
                      required: true,
                      message: 'Please enter email!',
                    },
                  ]}
                   >
                    <Input
                      placeholder="Enter e-mail id"
                      className="form-control custEmail custEmailValidation"
                    />
                  </Form.Item>
                </div>
                <div className="form-group col-lg-6">
                  <Form.Item 
                  name="mobileNo"
                   label="mobileNo"
                   rules={[
                    {
                      required: true,
                      message: 'Please enter mobile:no!',
                    },
                  ]}
                   >
                    <Input
                      placeholder="Enter mobile:no"
                      className="form-control custEmail custEmailValidation"
                    />
                  </Form.Item>
                </div>
                </div>
                <div className="form-group">
                  <Form.Item
                   name="message"
                    label="Message"
                    rules={[
                      {
                        required: true,
                        message: 'Please Your message!',
                      },
                    ]}
                    >
                    <Input.TextArea
                      className="form-control custMessage"
                      placeholder="Enter message"
                    />
                  </Form.Item>
                </div>
                <div className="text-center cutomSubmit">
                  <Form.Item>
                    <Button htmlType="submit">Send Message</Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-content-center">
            <div className="col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15025.20955219022!2d72.99306371534423!3d19.699746085695093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be711ae47145489%3A0x1406918813b8acab!2sOmkar%20Nature%20Farm!5e0!3m2!1sen!2sin!4v1711437599023!5m2!1sen!2sin"
                width="100%"
                alt={'Farmstay near Wada'}
                height={400}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ===================================== footer ======================= */}

      {/* ==================================== Script Tag ======================== */}
      {/* Google tag (gtag.js) */}
    </>
  );
}

export default ContectP;
