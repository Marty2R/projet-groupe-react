import React from "react";
// Custom components
import InputText from "@/components/parts/form/InputText";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import cars from "@/services/cars.service";
import { useEffect } from "react";
import { useState } from "react";

const Edite = () => {
  const { toast } = useToast();
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //await cars.updateCar();
    toast({
      title: "Succesful",
      description: "Datas as edited succesfuly.",
    });
  };

  const fetchError = (error) => {
    console.log(error);
    toast({
      title: "Error !",
      description: "Check your form.",
    });
  };

  const getCar = async () => {
    const id =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    const data = await cars.getCarById(id);
    setValue("Brand", data.brand);
    setValue("Model", data.model);
    setValue("Color", data.color);
    setValue("Price", data.price);
    setValue("Year", data.year);
    setValue("Year", data.year);
  };

  useEffect(() => {
    getCar();
  }, [getCar]);

  return (
    <>
      <main>
        <form
          onSubmit={handleSubmit(onSubmit, fetchError)}
          className="w-[500px] m-auto mt-[50px]"
        >
          <h1>Edite</h1>
          <InputText
            content="Brand"
            label="Brand"
            type="text"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Model"
            label="Model"
            type="text"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Price"
            label="Price"
            type="number"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Year"
            label="Year"
            type="number"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Color"
            label="Color"
            type="text"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <Button className="m-[auto] mt-[20px]">Save</Button>
        </form>
        <Toaster />
      </main>
    </>
  );
};

export default Edite;
