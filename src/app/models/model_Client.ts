import { model_Meta } from "@models/model_Meta";
import { model_Pass } from "@models/model_Pass";

export type model_Client = {
	meta: model_Meta;
	passes: Array<model_Pass>;
}
