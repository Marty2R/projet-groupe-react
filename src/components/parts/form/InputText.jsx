import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FormInput = ({ content, label, register, errors, validation, type }) => {
  return (
    <div>
      <div>
        {content && (
          <Label htmlFor={label}>
            {content} {validation && <span className="text-red-600">*</span>}
          </Label>
        )}

        <Input
          type={type || "text"}
          className="mt-2"
          placeholder="Entrez une valeur"
          name={label}
          id={label}
          {...register(label, validation)}
        ></Input>
      </div>
      {validation && errors[label] && (
        <p className="text-sm text-red-600 mt-1">{errors[label].message}</p>
      )}
    </div>
  );
};

export default FormInput;
