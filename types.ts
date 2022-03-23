export interface LaunchNormal {
    id: number;
    url: string;
    slug: string;
    name: string;
    status: LaunchStatus;
    last_updated: string;
    net:string;
    window_end: string;
    window_start: string;
    probability: number | null;
    holdreason: string | null;
    failreason: string | null;
    hashtag: string | null;
    launch_service_provider: AgencySerializerMini;
    rocket: RocketSerializerCommon;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image:string | null;
    infographic:string | null;
    program:Program[];
}

export interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface AgencySerializerMini {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface RocketSerializerCommon {
    id: number;
    configuration: 	LauncherConfigList;
}

export interface LauncherConfigList {
    id: number;
    url: string;
    name: string;
    family_name: string | null;
    full_name: string | null;
    variant: string | null;
}

export interface Mission {
    id: number;
    name: string;
    description: string;
    launch_designator: string;
    orbit: Orbit;
}

export interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface Pad {
    id: number;
    url: string;
    agency_id: number | null;
    name: string;
    info_url: string | null;
    wiki_url: string | null;
    map_url: string | null; 
    latitude: number | null; 
    longitude: number | null;
    location: Location;
    map_image: string | null;
    total_launch_count: number;
}

export interface Location {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
}

export interface Program {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: AgencySerializerMini[];
    image_url: string | null;
    start_date: string | null;
    end_date: string | null;
    info_url: string | null;
    wiki_url: string | null;
    mission_patches: MissionPatch[];
}

export interface MissionPatch {
    id: number;
    name: string;
    priority: number;
    image_url: string;
    agency: AgencySerializerMini;
}