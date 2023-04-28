import Head from "next/head";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { RootState } from "@/store";
import { decrement, increment, incrementByAmount } from "@/store/counter-slice";
import Button from "@/components/button";

const Home: FC = () => {
	const { t } = useTranslation();
	const counterValue = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>Made with ❤️ by Sajid</title>
			</Head>
			<h1 className="text-3xl font-bold underline">{t("welcome")}</h1>

			<div>
				<Button
					className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
					onClick={() => dispatch(decrement())}
				>
					-
				</Button>
				<span className="m-6 p-6">{counterValue}</span>
				<Button
					className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
					onClick={() => dispatch(increment())}
				>
					+
				</Button>
				<Button
					className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
					onClick={() => dispatch(incrementByAmount(5))}
				>
					+5
				</Button>
			</div>
		</>
	);
};

export async function getServerSideProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}

export default Home;
