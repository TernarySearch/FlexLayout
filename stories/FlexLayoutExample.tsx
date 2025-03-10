import React from "react";
import { IJsonModel, Layout, Model, TabNode } from "../src/index";
import "../dist/style/rounded.css";

const defaultLayout: IJsonModel = {
    global: {
        tabEnableClose: false,
        // tabMinWidth: 27,
        // tabMinHeight: 27,
        tabSetEnableTabWrap: false,
        borderEnableDrop: false,
    },
    // borders: [
    //     {
    //         type: "border",
    //         location: "right",
    //         show: true,
    //         selected: 0,
    //         minSize: 300,
    //         maxSize: 300,
    //         children: [
    //             {
    //                 type: "tab",
    //                 name: "Chat",
    //                 component: "chat",
    //             },
    //             {
    //                 type: "tab",
    //                 name: "Settings",
    //                 component: "settings",
    //             },
    //         ],
    //     },
    // ],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                weight: 40,
                children: [
                    {
                        type: "tab",
                        name: "Problem",
                        component: "problem",
                    },
                    {
                        type: "tab",
                        name: "Submissions",
                        component: "submissions",
                    },
                    {
                        type: "tab",
                        name: "Editorials",
                        component: "editorials",
                    },
                ],
            },
            {
                type: "row",
                weight: 60,
                children: [
                    {
                        type: "tabset",
                        weight: 60,
                        name: "Editor",
                        children: [
                            {
                                type: "tab",
                                name: "Editor",
                                component: "editor",
                            },
                        ],
                    },
                    {
                        type: "tabset",
                        weight: 40,
                        children: [
                            {
                                type: "tab",
                                name: "Console",
                                component: "console",
                            },
                            {
                                type: "tab",
                                name: "Testcases",
                                component: "testcases",
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

export function FlexLayout() {
    const model = Model.fromJson(defaultLayout);

    // Factory function to create the content of tabs
    const factory = (node: TabNode) => {
        const component = node.getComponent();

        if (component === "grid") {
            return (
                <div style={{ padding: "20px" }}>
                    <h3>Grid Content</h3>
                    <p>This is a sample grid panel</p>
                </div>
            );
        }

        return (
            <div style={{ padding: "20px" }}>
                <h3>Chart Content</h3>
                <p>This is a sample chart panel</p>
            </div>
        );
    };

    return (
        <div
            style={{
                width: "90vw",
                height: "90vh",
                padding: "20px",
                position: "relative",
                border: "2px solid black",
            }}
        >
            <Layout
                model={model}
                factory={factory}
                onModelChange={(model) => {
                    console.log({ model: model.toJson() });
                }}
            />
        </div>
    );
}
