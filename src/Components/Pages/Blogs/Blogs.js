import React from "react";

const Blogs = () => {
  return (
    <div className="text-center container my-5 ">
      <h5 className="text-start mb-4">
        What if Difference between `authorization` and `authentication`?
      </h5>
      <p className="lh-base text-secondary">
        what is the difference between authentication and authorization? Simply
        put, authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to. Authentication is used to verify
        that users really are who they represent themselves to be. Once this has
        been confirmed, authorization is then used to grant the user permission
        to access different levels of information and perform specific
        functions, depending on the rules established for different types of
        users.
      </p>
      <h5 className="text-start mb-2 mt-5">Why are you using `firebase`?</h5>
      <p className="lh-base text-secondary">
        Google Firebase is an application development platform that allows
        developers to create iOS, Android, and Web apps. Google Firebase offers
        many features that pitch it as the go-to backend development tool for
        web and mobile apps. It reduces development workload and time. And it's
        a perfect prototyping tool. Firebase is simple, lightweight, friendly,
        and industrially recognized.
        <h5 className="text-start">
          What other options do you have to implement authentication?
        </h5>
        <p>
          There are many more sites for authentication as an alternative to
          Firebase.Like parse, Back4App,AWS Amplify,Kuzzle,couchbase,
          nativescript
        </p>
      </p>
      <h5 className="text-start mb-2 mt-5">
        What other services does `firebase` provide other than authentication?
      </h5>
      <p className="lh-base text-secondary">
        Firebase Services: realtime database. cloud firestore. cloud function.
        cloud storage. hosting. authentication. test lab. performance
        monitoring. Google analytics. cloud messaging. remote config . dynamic
        link. AB testing (beta) . in app messaging
      </p>
    </div>
  );
};

export default Blogs;
