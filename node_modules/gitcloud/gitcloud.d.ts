export = gitCloud;

declare function gitCloud(pageUrl: string): Promise<{name: string, url: string}[]>;
