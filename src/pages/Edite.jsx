import React from "react";
// Custom components
import InputText from "@/components/parts/form/InputText";
import { useForm } from "react-hook-form";

const Edite = () => {
  const { register, errors } = useForm();
  return (
    <>
      <main>
        <form>
          <InputText
            content=""
            label="Brand"
            type="text"
            required
            register={register}
            validation={{ required: { message: "Champ requis !" } }}
            errors={errors}
          />
          <InputText
            content=""
            label="Model"
            type="text"
            required
            register={register}
            validation={{ required: { message: "Champ requis !" } }}
            errors={errors}
          />
          <InputText
            content=""
            label="Price"
            type="number"
            required
            register={register}
            validation={{ required: { message: "Champ requis !" } }}
            errors={errors}
          />
          <InputText
            content=""
            label="Year"
            type="number"
            required
            register={register}
            validation={{ required: { message: "Champ requis !" } }}
            errors={errors}
          />
          <InputText
            content=""
            label="Color"
            type="text"
            required
            register={register}
            validation={{ required: { message: "Champ requis !" } }}
            errors={errors}
          />
          <button type="submit">Save</button>
        </form>
      </main>
    </>
  );
};

export default Edite;
