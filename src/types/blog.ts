export interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    readingTime: number;
    content: {
        introduction: string;
        sections: Array<{
            title: string;
            content: string;
        }>;
        conclusion: string;
    };
    resources?: Array<{
        name: string;
        url: string;
    }>;
    tags: string[];
}