
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 2012
Project("{E24C65DC-7377-472B-9ABA-BC803B73C61A}") = "carandniall.com", "http://localhost:47535", "{A86F7CD4-23C2-4284-8AE6-3EFDB4790933}"
	ProjectSection(WebsiteProperties) = preProject
		UseIISExpress = "true"
		TargetFrameworkMoniker = ".NETFramework,Version%3Dv4.0"
		Debug.AspNetCompiler.VirtualPath = "/localhost_47535"
		Debug.AspNetCompiler.PhysicalPath = "..\..\..\My Web Sites\carandniall.com\"
		Debug.AspNetCompiler.TargetPath = "PrecompiledWeb\localhost_47535\"
		Debug.AspNetCompiler.Updateable = "true"
		Debug.AspNetCompiler.ForceOverwrite = "true"
		Debug.AspNetCompiler.FixedNames = "false"
		Debug.AspNetCompiler.Debug = "True"
		Release.AspNetCompiler.VirtualPath = "/localhost_47535"
		Release.AspNetCompiler.PhysicalPath = "..\..\..\My Web Sites\carandniall.com\"
		Release.AspNetCompiler.TargetPath = "PrecompiledWeb\localhost_47535\"
		Release.AspNetCompiler.Updateable = "true"
		Release.AspNetCompiler.ForceOverwrite = "true"
		Release.AspNetCompiler.FixedNames = "false"
		Release.AspNetCompiler.Debug = "False"
		SlnRelativePath = "..\..\..\My Web Sites\carandniall.com\"
	EndProjectSection
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{A86F7CD4-23C2-4284-8AE6-3EFDB4790933}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{A86F7CD4-23C2-4284-8AE6-3EFDB4790933}.Debug|Any CPU.Build.0 = Debug|Any CPU
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
EndGlobal
