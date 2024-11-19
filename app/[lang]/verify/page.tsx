import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function VerifyPage(props: {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lang } = await props.params;
  const { email } = await props.searchParams;

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>Email Verify Page</h1>
      <div>mail: {email || "null"}</div>
    </div>
  );
}