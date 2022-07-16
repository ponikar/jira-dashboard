export type IssueType = {
  id: number;
  key: string;
  fields: {
    summary: string;
    description: string;
    priority: {
      self: string;
      iconUrl: string;
      name: string;
      id: number;
    };
    status: {
        self: string,
        description: string ,
        iconUrl: string,
        name: string,
        id: number,
        statusCategory: {
            self: string,
            id: number,
            key: number,
            colorName: string,
            name: string
        }
    },
    creator: {
        emailAddress: string;
        displayName: string;
        avatarUrls: {
            "48x48": string
        }
    }
  };
};


export type IssueResponse = {
    issues: IssueType[];
    maxResults: number;
    startAt: number;
    total: number;
    expand: string;   
}