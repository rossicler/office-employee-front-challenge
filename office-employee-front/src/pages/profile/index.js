import React from "react";

import authenticatedRoute from "../../ui/components/AuthenticatedRoute/AuthenticatedRoute";

const Profile = () => {
  return <div>Profile Here</div>;
};

export default authenticatedRoute(Profile, { pathAfterFailure: "/login" });
