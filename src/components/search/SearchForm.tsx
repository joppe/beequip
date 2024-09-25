import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Boundaries } from "../../api/Api";
import { FormField } from "../core/form-field/FormField";
import { Form } from "../core/form/Form";
import { InputText } from "../core/input/InputText";
import { Label } from "../core/label/Label";
import { SupportText } from "../core/support-text/SupportText";
import { Button } from "../core/button/Button";
import { formatMoney } from "../../format/money";
import { FormData } from "./FormData";
import classes from "./search-form.module.css";

type SearchFormProps = {
  boundaries: Boundaries;
  onSubmit: (data: FormData) => void;
};

export function SearchForm({ boundaries, onSubmit }: SearchFormProps) {
  const searchSchema: ZodType<FormData> = z.object({
    brand: z.string(),
    type: z.string(),
    objectYear: z
      .number()
      .min(boundaries.boundaries.objectYear.min)
      .max(boundaries.boundaries.objectYear.max),
    purchasePrice: z
      .number()
      .min(boundaries.boundaries.purchasePrice.min)
      .max(boundaries.boundaries.purchasePrice.max),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(searchSchema),
  });

  return (
    <Form title="Zoek calculatie" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="brand">Merk</Label>
        <InputText
          id="brand"
          placeholder="Bijvoorbeeld DAF"
          {...register("brand")}
        />
        {errors.brand && (
          <span className={classes.error}>{errors.brand.message}</span>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="type">Type</Label>
        <InputText
          id="type"
          placeholder="Bijvoorbeeld XF480"
          {...register("type")}
        />
        {errors.type && (
          <span className={classes.error}>{errors.type.message}</span>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="objectYear">Bouwjaar</Label>
        <InputText
          id="objectYear"
          placeholder="Bijvoorbeeld 2021"
          {...register("objectYear", { valueAsNumber: true })}
        />
        {errors.objectYear && (
          <span className={classes.error}>{errors.objectYear.message}</span>
        )}
        <SupportText>
          Tussen {boundaries.boundaries.objectYear.min} en{" "}
          {boundaries.boundaries.objectYear.max}
        </SupportText>
      </FormField>
      <FormField>
        <Label htmlFor="purchasePrice">Aanschafwaarde</Label>
        <InputText
          id="purchasePrice"
          placeholder="Bijvoorbeeld 50000"
          {...register("purchasePrice", { valueAsNumber: true })}
        />
        {errors.purchasePrice && (
          <span className={classes.error}>{errors.purchasePrice.message}</span>
        )}
        <SupportText>
          Tussen {formatMoney(boundaries.boundaries.purchasePrice.min)} en{" "}
          {formatMoney(boundaries.boundaries.purchasePrice.max)}
        </SupportText>
      </FormField>
      <div>
        <Button type="submit">Berekening opslaan</Button>
      </div>
    </Form>
  );
}
