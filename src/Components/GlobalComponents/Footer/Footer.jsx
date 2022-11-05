import {
  faLocationDot,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      label: "Top Categories",
      subLink: [
        {
          to: "/shop",
          label: "Mobile Phones",
        },
        {
          to: "/shop",
          label: "Modern Sofa",
        },
        {
          to: "/shop",
          label: "Arm chair",
        },
        {
          to: "/shop",
          label: "Smart Watches",
        },
      ],
    },
    {
      label: "Useful Links",
      subLink: [
        {
          to: "/shop",
          label: "Shop",
        },
        {
          to: "/shop",
          label: "Cart",
        },
        {
          to: "/shop",
          label: "Login",
        },
        {
          to: "/shop",
          label: "Privacy policy",
        },
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="brand">
            <h3>Shop in</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deserunt qui magnam voluptatum esse laborum error vitae est,
              libero voluptate itaque quidem cum magni? Reprehenderit deleniti
              quibusdam optio veniam neque.
            </p>
          </div>
          {footerData.map((item, index) => {
            return (
              <div className={item.label} key={index}>
                <h3>{item.label}</h3>
                {item.subLink.map((subItem, index) => {
                  return (
                    <NavLink to={subItem.to} key={index}>
                      {subItem.label}
                    </NavLink>
                  );
                })}
              </div>
            );
          })}
          <div className="contact">
            <div className="head">
              <h3>Contact</h3>
            </div>
            <div className="addres">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </span>
              <span>Egypt, Assiut</span>
            </div>
            <div className="phone">
              <span>
                <FontAwesomeIcon icon={faPhone} />{" "}
              </span>
              <span>01122889039</span>
            </div>
            <div className="email">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </span>
              <span>abobakr201@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="copyRight text-center">
          Copyright reserve &copy; AboBakr
        </div>
      </div>
    </div>
  );
};

export default Footer;
