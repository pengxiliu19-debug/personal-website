export type Category = '全部项目' | 'AI 应用' | '前端交互' | 'AIGC 创作'
export interface Project {
  id: string; number: string; title: string; subtitle: string; category: Exclude<Category, '全部项目'>;
  date: string; tags: string[]; description: string; problem: string; solution: string[]; takeaway: string;
}

// Personal facts come from the supplied resume. Replace illustrative UI covers with real screenshots when available.
// This data module is the future API boundary: components consume Project[] independently of its source.
export const projects: Project[] = [
  {
    id: 'music', number: '01', title: 'Music Companion Hub', subtitle: '让音乐，也听懂你。', category: '前端交互', date: '2025.05 — 2025.06',
    tags: ['React', 'TypeScript', 'Gemini API'],
    description: '把黑胶唱片的仪式感与 AI 对话结合，做一个可以交流的音乐电台。',
    problem: '探索如何把自然语言音乐搜索、推荐与播放器体验整合在同一个界面里。',
    solution: ['用 React + TypeScript 构建响应式界面，以黑胶唱片作为主要视觉与交互元素。', '使用 Express 对接 Gemini API，连接自然语言输入与音乐搜索、推荐功能。', '根据简历记录，项目由个人独立完成前后端开发与部署。'],
    takeaway: '关注从用户表达需求，到得到反馈、播放音乐的完整体验，而不只是一张播放器页面。',
  },
  {
    id: 'interview', number: '02', title: 'AI 面试训练系统', subtitle: '下一次面试，多一点底气。', category: 'AI 应用', date: '2025.06',
    tags: ['React', 'LLM API', '语音识别'],
    description: '模拟面试、动态追问与逐题复盘，让练习有反馈、有方向。',
    problem: '为缺少真实面试练习机会的求职者，提供可以反复练习和复盘的模拟场景。',
    solution: ['覆盖技术面、行为面、群面等场景，使用大模型生成问题与动态追问。', '提供语音和文字两种输入方式。', '围绕逻辑性、流畅度和技术深度提供反馈，并支持逐题复盘。'],
    takeaway: 'AI 功能的价值需要通过清晰的流程和可理解的反馈传递给用户。',
  },
  {
    id: 'legal', number: '03', title: '劳动权益 MCP', subtitle: '让复杂的信息，更容易理解。', category: 'AI 应用', date: '2025.03 — 2025.04',
    tags: ['Python', 'MCP', 'LightRAG'],
    description: '结合检索增强与知识图谱，探索劳动权益信息的智能问答。',
    problem: '探索如何在复杂劳动权益问题中组织信息，并把检索到的资料用于辅助问答。',
    solution: ['使用 MCP 架构组织工具调用与任务拆解。', '结合 LightRAG 知识图谱与检索增强，连接法律条文和判例资料。', '使用 Firecrawl 抓取资料，作为中国计算机设计大赛 AI 应用方向参赛项目。'],
    takeaway: '涉及专业信息的 AI 应用，需要重视资料来源、可追溯性与回答边界。',
  },
  {
    id: 'aigc', number: '04', title: '岭南 · 海上丝绸之路', subtitle: '用新的工具，讲熟悉的文化。', category: 'AIGC 创作', date: '2024.10 — 2025.05',
    tags: ['ComfyUI', 'Stable Diffusion', 'LoRA'],
    description: '围绕海上丝绸之路与戏曲文化，探索 AI 数字艺术的表达方式。',
    problem: '尝试将岭南地域文化与生成式图像工具结合，完成主题化的数字艺术创作。',
    solution: ['简历记录使用了 Stable Diffusion、ComfyUI、LoRA 与 ControlNet。', '创作主题围绕海上丝绸之路和戏曲文化展开。', '参加传智杯 AIGC 创新挑战赛并获得国赛奖项；具体个人分工待补充。'],
    takeaway: '这段经历开启了我对 AI 创作工具和应用体验的持续兴趣。',
  },
]

export const profile = {
  name: '刘鹏熙', english: 'LIU PENGXI', email: '1562697279@qq.com',
  school: '岭南师范学院', major: '人工智能', education: '2024.09 — 2028.06（在读）',
  resume: './assets/liu-pengxi-resume.pdf', portrait: './assets/portrait-thick-glasses.png',
}
