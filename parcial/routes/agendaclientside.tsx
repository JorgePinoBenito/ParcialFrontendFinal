import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../islands/AddForm.tsx";

type Contacto = {
  name: string;
  email: string;
};

type FormData = {
  name: string;
  email: string;
};

const contactos: Contacto[] = [];

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext<unknown, unknown>) => {
    try {
      const formData = await req.formData();

      const data: FormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
      };

      const response = contactos.push(data);

      return new Response("", {
        status: 201,
        headers: {
          Location: "/",
        },
      });
    } catch (error) {
      throw new Error("Error adding contact");
    }
  },
};

const Page = () => {
  return (
    <div class="contacto">
      <AddForm />
    </div>
  );
};
export default Page;
