import React from "react";
import jwt from "../../Images/jwt.png";
import jwtwork from "../../Images/jwtWork.png";

const JWt = () => {
  return (
    <div className="mt-12">
      <h1 className="font-bold text-3xl py-2">
        What is the purpose of jwt and how does it work?
      </h1>

      <div className="flex justify-between lg:flex-row  flex-col">
        <img
          className="h-[400px] lg:w-1/2  w-full object-cover"
          src={jwt}
          alt=""
        />
        <div className="lg:w-1/2 w-full lg:pl-7 px-2 pt-3">
          <h2 className="font-bold text-xl">What is JWT (JSON Web Token)?</h2>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. <br />{" "}
            <br />
            It is compact, readable and digitally signed using a private key/ or
            a public key pair by the Identity Provider(IdP). So the integrity
            and authenticity of the token can be verified by other parties
            involved. The purpose of using JWT is not to hide data but to ensure
            the authenticity of the data. JWT is signed and encoded, not
            encrypted. <br /> <br />
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn’t have to
            completely rely on a datastore(database) to save session
            information.
          </p>
          <h2 className="font-bold text-xl mt-8">
            What is the purpose of jwt?
          </h2>
          <p>
            The true purpose of JSON Web Tokens and a comparison of two
            approaches in authentication.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center lg:mt-8 lg:flex-row flex-col">
        <div>
          <h2 className="font-bold text-xl mt-12">How it works?</h2>
          <p>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
          </p>
          <ul className="mt-4">
            <li className="list-disc ml-5 py-1">
              User sign-in using username and password or google/facebook.
            </li>
            <li className="list-disc ml-5 py-1">
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
            </li>
            <li className="list-disc ml-5 py-1">
              User’s Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
            </li>
            <li className="list-disc ml-5 py-1">
              Resource server then verifies the authenticity of the token using
              the secret salt/ public key.
            </li>
          </ul>
        </div>
        <div className=" lg:w-1/2 w-full  ">
          <img src={jwtwork} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JWt;
