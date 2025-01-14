import React, { ReactNode } from "react";

const layout = ({
  children,
  about,
  contact,
}: {
  children: ReactNode;
  about: ReactNode;
  contact: ReactNode;
}) => {
  return (
    <div>
      {children}
      {about}
      {contact}
    </div>
  );
};

export default layout;
