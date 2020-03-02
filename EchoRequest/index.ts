import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.res = {
    status: 200,
    body: JSON.stringify(req, undefined, "\t"),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

export default httpTrigger;
