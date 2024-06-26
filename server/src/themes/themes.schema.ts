import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {COURSES_SCHEMA_NAME, LESSONS_SCHEMA_NAME, THEMES_COLLECTION_NAME, THEMES_SCHEMA_NAME} from "../constants";
import mongoose, {Types} from "mongoose";
import {LessonDocument} from "../lessons/lessons.shema";

@Schema({collection: THEMES_COLLECTION_NAME, versionKey: false})
export class Theme {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [Types.ObjectId], default: [], ref: LESSONS_SCHEMA_NAME})
    lessons: Types.ObjectId[];

    @Prop({type: Types.ObjectId, ref: COURSES_SCHEMA_NAME})
    courseId: Types.ObjectId;
}

export type ThemeDocument = Theme & Document;
export const ThemeSchema = SchemaFactory.createForClass(Theme);