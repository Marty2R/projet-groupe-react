import React, { useEffect, useState } from "react";
// Custom components
import InputText from "@/components/parts/form/InputText";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Header from "../components/Header";

import cars from "@/services/cars.service";

const Edite = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const id =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    await cars.updateCar(id, data);
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
    setValue("brand", data.brand);
    setValue("model", data.model);
    setValue("color", data.color);
    setValue("price", data.price);
    setValue("year", data.year);
  };

  useEffect(() => {
    getCar();
  }, [getCar]);

  return (
    <>
      <main>
        <Header />
        <form
          onSubmit={handleSubmit(onSubmit, fetchError)}
          className="w-[500px] m-auto mt-[50px]"
        >
          <h1>Edite</h1>
          <InputText
            content="Brand"
            label="brand"
            type="text"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Model"
            label="model"
            type="text"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Price"
            label="price"
            type="number"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Year"
            label="year"
            type="number"
            required
            register={register}
            validation={{ required: "Champ requis !" }}
            errors={errors}
          />
          <InputText
            content="Color"
            label="color"
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
