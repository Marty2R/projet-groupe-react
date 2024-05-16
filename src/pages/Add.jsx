import React from "react";
// Custom components
import InputText from "@/components/parts/form/InputText";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import carService from "@/services/cars.service";
import Header from "../components/Header";

const Add = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await carService.addCar(data);
    console.log(data);
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

  console.log(errors);
  return (
    <>
      <main>
        <Header />
        <form
          onSubmit={handleSubmit(onSubmit, fetchError)}
          className="w-[500px] m-auto mt-[50px]"
        >
          <h1>Ajout d'un véhicule</h1>
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

export default Add;
