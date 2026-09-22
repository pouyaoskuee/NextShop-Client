"use client";
import TextField from "@/common/TextField";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import * as yup from "yup";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
    const router = useRouter();




  const { isLoading, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });



    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submitHandler');

        const schema = yup.object({
            username: yup
                .string()
                .required("نام کاربری الزامی است")
                .min(3, "حداقل ۵ کاراکتر وارد کنید"),

            email: yup
                .string()
                .email("ایمیل معتبر نیست")
                .required("ایمیل الزامی است"),
        });

        const data = {
            username: name,
            email,
        };

        try {
            console.log('try')
            await schema.validate(data, {
                abortEarly: false,
            });

            const { message } = await mutateAsync({
                name,
                email,
            });

            toast.success(message);
            router.push("/");
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors = {};

                error.inner.forEach((err) => {
                    newErrors[err.path] = err.message;
                });

                setErrors(newErrors);
                return;
            }

            toast.error(error?.response?.data?.message);
        }
    };

    console.log(errors)






  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={(e)=>submitHandler(e)}>
          <TextField
            name="name"
            label="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            errors={errors.username}
          />
          <TextField
            name="email"
            label="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errors={errors.email}
          />
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfile;
