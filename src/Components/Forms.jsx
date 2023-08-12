import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Input } from "@nextui-org/react";
import { yupResolver } from "@hookform/resolvers/yup";
export const Forms = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required("Please provide a email"),
        password: yup.string().min(8).max(32).required(),
      });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
  
  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <div>
      {/* <Spline style={{height:"100vh"}} scene="https://prod.spline.design/D8MgKLHFw5wT3roO/scene.splinecode" /> */}
      <div className="w-[95%]  bg-slate-400 mx-auto my-20 p-4">
        <div className="flex w-full  md:flex-nowrap mb-6 md:mb-0 gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="First Name"
              placeholder="Hrushi"
              labelPlacement="outside"
              {...register("fullname")}
            />
           

            <Input
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Email"
            validationState={errors.email?.message ? "invalid" : "valid"}
            errorMessage={errors.email?.message}
            labelPlacement="outside"
              {...register("email")}
            />
            <Input
              type="number"
              label="Age"
              placeholder="20"
              labelPlacement="outside"
              {...register("age")}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Confirm Password"
              labelPlacement="outside"
              {...register("password")}
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              labelPlacement="outside"
              {...register("confirmpassword")}
              
            />
            <Button type="submit" className="mt-4">
                Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
